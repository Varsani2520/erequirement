import { user } from "@/app/modal/contactUser";
import { NextResponse } from "next/server"

export async function DELETE(request,{params}){
const{userId}=params;
try {
    user.deleteOne({
        _id:userId
    })
    return NextResponse.json({
        message:'user delete success'
    })
} catch (error) {
    console.log(error);
    return NextResponse.json({msg:'failed delete user'})
    
}

}

// get single user 
export const GET=async(request,{params})=>{
const {userId}=params;
const userss=user.findById(userId)
return NextResponse.json(userss)
}

// update user 
export async function PUT(request,{params}){
    const {userId}=params;
   const {name,message} =await request.json()
//    get user
try{
    const userToUpdate=await user.findById(userId)
    userToUpdate.name=name;
    userToUpdate.message=message;
    const updateduser=await userToUpdate.save()
    return NextResponse.json(updateduser)
}
catch(error){
    return NextResponse.json({
        msg:'uddate error'
    })
}
}