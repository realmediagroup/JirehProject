import { NextResponse } from 'next/server'
import { selectSaleId } from '@/models/Sales'



export async function GET(req,{ params }) {
	let result = await selectSaleId(params.id);
	return NextResponse.json({result});
}
