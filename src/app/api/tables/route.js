import { NextResponse } from 'next/server'
import { createClient, truncateClient, dropClient, createSales, truncateSales, dropSales} from '@/models/Tables';
export async function POST(req, res) {
	const {process} = await req.json()
	let reply;
	switch (process) {
		case 'CREATE':
			reply =  await processCreate();
			break;
		case 'TRUNCATE':
			reply =  await processTruncate();
			break;
		case 'DROP':
			reply =  await processDrop();
			break;
	}
	return NextResponse.json({reply});
}

const processCreate = async () => {
	let resultClient = await createClient();
	let resultSales  = await createSales();
	return   {resultClient,resultSales}
}

const processTruncate = async () => {
	let resultClient = await truncateClient();
	let resultSales  = await truncateSales();
	return   {resultClient,resultSales}
}

const processDrop = async () => {
	let resultClient = await dropClient();
	let resultSales  = await dropSales();
	return   {resultClient,resultSales}
}