import { getPool } from "@/db/db";

export const insertClient = async (data) => {
	const {identification, name, email, phone, direction} = data
	const pool = getPool()
	const process = 'insert client';
	let status = true;
	let sql = `INSERT INTO clients (identification, name, email, phone, direction) VALUES ($1, $2, $3, $4, $5)`;
	try {
		await pool.query(sql,[identification, name, email, phone, direction]);
	} catch (err) {
		status = {
			error: true,
			error_description: err,
			sql
		}
	}
	const create_client = {
		process,
		status,
	}
	return create_client;
}

export const selectClients = async () => {
	const pool = getPool()
	const process = 'select clients';
	let status = true;
	let data = null;
	let sql = 'SELECT * FROM clients';
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
	const select_clients = {
		process,
		status,
		data
	}
	return select_clients;
}

export const selectClientId = async (id) => {
	const pool = getPool()
	const process = 'select client by id';
	let status = true;
	let data = null;
	let sql = 'SELECT * FROM clients WHERE identification = '+id;
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
	const select_client_id = {
		process,
		status,
		data
	}
	return select_client_id;
}

export const updateClient = async (data, id) => {
	const pool = getPool()
	const process = 'update client';
	let status = true;
	let values = [];
	let setCount = 0;
	let sql = 'UPDATE clients SET ';
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
	const update_client = {
		process,
		status,
	}
	return update_client;
}

export const deletetClientId = async (id) => {
	const pool = getPool()
	const process = 'delete client by id';
	let status = true;
	let sql = 'DELETE FROM clients WHERE identification = '+id;
	try {
		 await pool.query(sql);
	} catch (err) {
		status = {
			error: true,
			error_description: err,
			sql
		}
	}
	const delete_client_id = {
		process,
		status
	}
	return delete_client_id;
}