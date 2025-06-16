import {NextResponse} from 'next/server';
import connect from '../../../../lib/db';

export async function GET(){
try{
const [company]=await connect.query("SELECT * FROM company");
return NextResponse.json(company); 
}
catch(error){
return NextResponse.json(
{error:"Failed to get Compony"},
{status:500}
);
}
}