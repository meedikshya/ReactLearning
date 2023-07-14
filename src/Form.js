import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

export const Form = () => {


    const schema = yup.object().shape({
        fullName : yup.string().required("Your Full name is required!"),
        email: yup.string().email().required(),
        age : yup.number().positive().integer().min(18).max(35).required(),
        ps: yup.string().min(5).max(25).required(),
        cps : yup.string().oneOf([yup.ref("ps"), null], "Passwords don't match").required()
    });

    const {register, handleSubmit, formState : {errors} } =  useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name" {...register("fullName")} />
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>

            <input type="number" placeholder="age" {...register("age")} />
            <p>{errors.age?.message}</p>

            <input type="text" placeholder="PAssword" {...register("ps")}/>
            <p>{errors.ps?.message}</p>

            <input type="text" placeholder="confirm PAssword.." {...register("cps")}/>
            <p>{errors.cps?.message}</p>

            <input type="submit" />
        </form>
    )
}