import {
	Body,
	Container,
	Column,
	Head,
	Heading,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";



 const Email = () => {
	return (
		<Html>
			<Head />
			<Preview></Preview>
			<Body style={main}>
				<Container style={container}>
					<Section style={logoContainer}>
						aqui logo
					</Section>
					<Heading style={containerTitle}>GRACIAS POR TU COMPRA</Heading>
					<Text style={containerText}>
						Hola <b> Javier aleman</b>.
						Gracias por tu hermosa contribución a nuestra rifa para la nueva sede de la iglesia.
						Tu apoyo no solo construye un nuevo hogar para nosotros, sino que también fortalece nuestros
						lazos espirituales como comunidad.
					</Text>
					<Text style={containerText}>
						Que Dios te bendiga abundantemente por tu generosidad.
					</Text>
					<Text style={containerItalic}>
						- Con el siguiente codigo confirmas tu compra y participas en el sorteo:
					</Text>
					<Section style={containerCodebox}>
						<Text style={containerCodeboxCode}>
							CPW - 125478
						</Text>
					</Section>
					<Text style={containerText}>
						Este espacio para poner  como: (mensaje adicional, fecha y hora de sorteo)
					</Text>
					<Text style={containerTextData}>aqui firma</Text>
					<Text style={containerTextData}>[Nombre y cargo]</Text>
					<Text style={containerTextData}>[Nombre de la Iglesia]</Text>
					<Section>
						<Text style={footerText}>
							Nombre de la iglesia, o nombre de empresa. <br />
							Aqui direccion y telefonos de la iglecia <br />
							<br />
							©2024 Todos los derechos reservados.
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	)
}


const main = {
	backgroundColor: "#ffffff",
	margin: "0 auto",
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
	margin: "0 auto",
	padding: "0px 20px",
};

const containerTitle = {
	color: "#3d3d3d",
	fontSize: "26px",
	fontWeight: "700",
	margin: "20px 0",
	padding: "0",
	lineHeight: "42px",
};

const containerText = {
	color: "#3d3d3d",
	fontSize: "14px",
	lineHeight: "24px",
}

const containerItalic = {
	color: "#3d3d3d",
	fontSize: "14px",
	lineHeight: "24px",
	fontStyle: "italic",
}

const containerTextData = {
	color: "#3d3d3d",
	fontSize: "14px",
	lineHeight: "14px",
}



const containerCodebox = {
	background: "rgb(245, 244, 245)",
	borderRadius: "4px",
	marginBottom: "30px",
	padding: "40px 10px",
};
const containerCodeboxCode = {
	color: "#3d3d3d",
	fontSize: "30px",
	textAlign: "center",
	verticalAlign: "middle",
}


const footerText = {
	fontSize: "12px",
	color: "#b7b7b7",
	lineHeight: "15px",
	textAlign: "center" ,
	marginBottom: "50px",
};

const logoContainer = {
	marginTop: "32px",
};




export default Email

