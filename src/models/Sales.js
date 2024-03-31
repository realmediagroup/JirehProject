import { getPool } from "@/db/db";

const generateNum = async () => {
	const pool = getPool()
	let sql = `SELECT number FROM Sales order by number desc limit 1 `;
	let ticketNumber = false;
	let numStart = 5000;
	let numEnd = 10000;
	try {
		const result = await pool.query(sql);
		if (result.rows.length >= 1) {
			let number = parseInt(result.rows[0].number)
			if (number < numEnd) {
				ticketNumber = number + 1;
			}
		} else {
			ticketNumber = numStart;
		}
	} catch (err) {
		console.log(err)
	}
	return ticketNumber;
}

export const insertSale = async (data) => {
	let ticketNumber = await generateNum();
	const process = 'insert sale';
	let status = false;
	const {client_id, client_name} = data
	const pool = getPool()
	let sql = `INSERT INTO sales (number, client_id, client_name) VALUES ( $1, $2, $3 )`;
	if (ticketNumber) {
		try {
			await pool.query(sql, [ticketNumber, client_id, client_name]);
			status = true
		} catch (err) {
			status = {
				error: true,
				error_description: err,
				sql
			}
		}
	}
	const create_Sale = {
		process,
		status,
	}
	return create_Sale;
}

export const selectSales = async () => {
	const pool = getPool()
	const process = 'select Sales';
	let status = true;
	let data = null;
	let sql = 'SELECT * FROM Sales';
	try {
		let result = await pool.query(sql);
		data = result.rows;
	} catch (err) {
		status = {
			error: true,
			error_description: err,
			sql
		}
	}
	const select_Sales = {
		process,
		status,
		data
	}
	return select_Sales;
}

export const selectSaleId = async (id) => {
	const pool = getPool()
	const process = 'select Sale by id';
	let status = true;
	let data = null;
	let sql = 'SELECT * FROM sales WHERE id = '+id;
	try {
		let result = await pool.query(sql);
		data = result.rows;
	} catch (err) {
		status = {
			error: true,
			error_description: err,
			sql
		}
	}
	const select_sale_id = {
		process,
		status,
		data
	}
	return select_sale_id;
}


export const selectSaleClient = async (id) => {
	const pool = getPool()
	const process = 'select Sale by client';
	let status = true;
	let data = null;
	let sql = 'SELECT * FROM sales WHERE client_id = '+id;
	try {
		let result = await pool.query(sql);
		data = result.rows;
	} catch (err) {
		status = {
			error: true,
			error_description: err,
			sql
		}
	}
	const select_sale_id = {
		process,
		status,
		data
	}
	return select_sale_id;
}
/*
export const updateSale = async (data, id) => {
	const pool = getPool()
	const process = 'update Sale';
	let status = true;
	let values = [];
	let setCount = 0;
	let sql = 'UPDATE Sales SET ';
	Object.entries(data).forEach(([field, value]) => {
		if (value !== undefined) {
			sql += ` ${field} = $${++setCount},`;
			values.push(value);
		}
	});
	sql = sql.slice(0, -1);
  	sql += ` WHERE identification = $${++setCount}`;
  	values.push(id);
	try {
		await pool.query(sql,values);
	} catch (err) {
		status = {
			error: true,
			error_description: err,
			sql
		}
	}
	const update_Sale = {
		process,
		status,
	}
	return update_Sale;
}

export const deletetSaleId = async (id) => {
	const pool = getPool()
	const process = 'delete Sale by id';
	let status = true;
	let sql = 'DELETE FROM Sales WHERE identification = '+id;
	try {
		 await pool.query(sql);
	} catch (err) {
		status = {
			error: true,
			error_description: err,
			sql
		}
	}
	const delete_Sale_id = {
		process,
		status
	}
	return delete_Sale_id;
}
*/

