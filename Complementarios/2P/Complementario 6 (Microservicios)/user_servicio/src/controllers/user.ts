import { User } from "../models";
import { IUser } from "../interfaces/IUser";
import { Request, Response } from "express";

const authUser = async (req: Request, res: Response) => {
    const { ci, password } = req.body;
    User.findOne({ ci }, (err: Error, user: any) => {
        if (err) {
            res.status(400).json({
                message:
                    'Error al autenticar el usuario.'
            })
        } else if (!user) {
            res.status(400).json({
                message:
                    'Usuario no registrado.'
            })
        } else
            process.env.dataUser = user
            res.status(200).json({
                message:
                    'Usuario autenticado.',
                datos:
                    user
            });
            // user.isCorrectPassword(password, (err: Error, result: any) => {
            //     if (err) {
            //         res.status(400).json({
            //             message:
            //                 'Error al autenticar el usuario.'
            //         })
            //     } else if (result) {
            //         process.env.dataUser = user
            //         res.status(200).json({
            //             message:
            //                 'Usuario autenticado.',
            //             datos:
            //                 user
            //         });
            //     } else {
            //         res.status(400).json({
            //             message:
            //                 'Usuario y/o contraseña incorrecta.'
            //         })
            //     }
            // })
    })
}

//User lvl 1
const registerOwnerParking = async (req: Request, res: Response) => {
    try {
        const { ...body } = req.body;
        //2 significa que sera un OwnerParking
        body.userAdmin = 2;
        const userExiste = await User.findOne({ ci: body.ci });
        if (userExiste) {
            res.status(400).json({
                message:
                    `El usuario con esa cédula ya existe ${userExiste.ci}.`
            })
        } else {
            const user = new User(body);
            const userNuevo = await user.save();
            res.status(200).json({
                message:
                    'Usuario registrado correctamente.',
                datos:
                    userNuevo,
            });
        }
    } catch (error) {
        res.status(201).json("Error en el sistema.");
    }
}

const getUsersOwnerParkings = async (req: Request, res: Response) => {
    const query = { userAdmin: 2 };
    const [total, users] = await Promise.all([
        User.countDocuments(query),
        User.find(query),
    ])
    res.status(200).json({
        message:
            'Lista de usuarios dueños de parqueaderos.',
        total:
            total,
        datos:
            users,
    });
}

export {
    authUser,
    registerOwnerParking,
    getUsersOwnerParkings,
}