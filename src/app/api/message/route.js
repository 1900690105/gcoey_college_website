import connect from '../../../../lib/db';
import {NextResponse} from "next/server";

export async function GET(){
try{
const [message]=await connect.query("SELECT * FROM administration_message");
return NextResponse.json(message);
}catch(error){
return NextResponse.json(
{error:"Faild to fetch message"},
{status:500}
)
}
}