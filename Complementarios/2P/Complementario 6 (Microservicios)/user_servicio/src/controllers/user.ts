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

const editarOwnerParking = async (req: Request, res: Response) => {
    try {
        const id = req.params['id'];
        const data = req.body;

        await User.findByIdAndUpdate(id, data, (err:Error, act_user: any)=>{
            if(!err){
                res.status(200).json({
                    datos:
                        act_user,
                    message:
                        'Usuario actualizado correctamente.'
                })
            }else{
                res.status(400).json({
                    message:
                        'Error al actualizar.',
                });
            }
        }).clone().catch(function(err){ console.log(err)})

    }catch (error) {
        console.log(error);
        res.status(201).json("Error en el sistema, F.");
    }
}

const  OwnerParkingID = async (req : Request, res : Response) => {

    try {

        const id = req.params['id']

        await User.findById(id, (err : Error, user_data : any) => {

            if (user_data) {

                res.status(200).send({user: user_data})
            } else {

                res.status(400).send({ message: 'No existe el usuario' })

            }

        }).clone().catch(function(err){ console.log(err)})


    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un problema')
    }

}

const EliminarOwnerParking = async (req : Request, res : Response) =>  {

    try {

        const id = req.params['id'];
        const UsuarioEliminado = await User.findByIdAndDelete(id, { new: true });
        res.status(200).send({ message: 'Usuario eliminado con éxito', data: UsuarioEliminado })


    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un problema')
    }

}

export {
    authUser,
    registerOwnerParking,
    getUsersOwnerParkings,
    editarOwnerParking,
    OwnerParkingID,
    EliminarOwnerParking
}