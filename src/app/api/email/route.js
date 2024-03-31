import { NextResponse } from 'next/server'
import { Resend } from "resend";
import Email from '@/email/Template';
//import Email from '@/email/Template';




export async function GET(req, res) {

    return NextResponse.json({
      mensaje: 'hola mundo ',
   })

}

export async function POST(req, res) {

	const resend = new Resend('re_EARZkNDk_6jzmef7v1p4PCkopDs7JJ67K');
  try {
    const data = await resend.emails.send({
      from: 'PRUEBA <onboarding@resend.dev>',
      to: ['luis@realmediagroups.com'],
      subject: 'Código Confirmación',
      react: <Email/>,
    });

     return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(error)
  }
}