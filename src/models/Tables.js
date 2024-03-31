import { getPool } from "@/db/db";

export const createClient = async () => {
	const pool = getPool()
	const process = 'create client';
	let status = true;
	let sql = `CREATE TABLE IF NOT EXISTS clients (
		identification INT PRIMARY KEY,
		name VARCHAR(100),
		email VARCHAR(100),
		phone VARCHAR(20),
		direction VARCHAR(255)
	);`;
	try {
		await pool.query(sql)
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

export const truncateClient = async () => {
	const pool = getPool()
	const process = 'truncate clients';
	let status = true;
	let sql = 'TRUNCATE TABLE clients';
	try {
		await pool.query(sql)
	} catch (err) {
		status = {
			error: true,
			error_description: err,
			sql
		}
	}
	const truncate_client = {
		process,
		status,
	}
	return truncate_client;
}

export const dropClient = async () => {
	const pool = getPool()
	const process = 'drop client';
	let status = true;
	let sql = 'DROP TABLE IF EXISTS clients';
	try {
		await pool.query(sql)
	} catch (err) {
		status = {
			error: true,
			error_description: err,
			sql
		}
	}
	const drop_client = {
		process,
		status,
	}
	return drop_client;
}

export const createSales = async () => {
	const pool = getPool()
	const process = 'create sales';
	let status = true;
	let sql = `CREATE TABLE IF NOT EXISTS sales (
		id SERIAL PRIMARY KEY,
		number VARCHAR(30),
		date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		client_id INT ,
		client_name VARCHAR(100)
	);`;
	try {
		await pool.query(sql)
	} catch (err) {
		status = {
			error: true,
			error_description: err,
			sql
		}
	}
	const create_sales = {
		process,
		status,
	}
	return create_sales;
}

export const truncateSales = async () => {
	const pool = getPool()
	const process = 'truncate sales';
	let status = true;
	let sql = 'TRUNCATE TABLE sales';
	try {
		await pool.query(sql)
	} catch (err) {
		status = {
			error: true,
			error_description: err,
			sql
		}
	}
	const truncate_sales = {
		process,
		status,
	}
	return truncate_sales;
}

export const dropSales = async () => {
	const pool = getPool()
	const process = 'drop sales';
	let status = true;
	let sql = 'DROP TABLE IF EXISTS sales';
	try {
		await pool.query(sql)
	} catch (err) {
		console.log(err)
		status = {
			error: true,
			error_description: err,
			sql
		}
	}
	const drop_sales = {
		process,
		status,
	}
	return drop_sales;
}