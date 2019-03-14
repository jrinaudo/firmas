//función que ejecuta script
function ejecutar(){
	//constructor
	function firma(nombre, mail, puesto, num_cel, loc) {
				this.nombre= nombre;
				this.mail= mail + "@arbusta.net";
				this.puesto= puesto;
				this.num_cel= num_cel;
				this.loc = loc;

				this.ofi = function(){
				//método asignación de oficina
					if(this.loc == "R"){
						this.loc = "Rosario";
					}else if(this.loc == "BA"){
						this.loc == "Buenos Aires";
					}else if(this.loc == "CM"){
						this.loc = "Medellín";
					}else if(this.loc == "MO"){
						this.loc = "Montevideo";
					}

				};

				//método consulta y formato de firma.
				this.generar = function(){ 
					//consula por campos vacíos
					if((this.puesto == "Seleccionar")|(this.mail == "")|(this.nombre == "") | (this.num_cel == "") | (this.loc =="Seleccionar") | (this.car == "Seleccionar")){
      						alert("Debe completar todos los campos");
      			}else{ 
      				//formato de firma
					document.getElementById("firma").innerHTML = "<font size='1'><table><tr><img src='https://accionrh.com/wp-content/uploads/2018/03/logo-arbusta.png' width='72' height='72' style='float:left'><tr><td><b>" + this.nombre +"</b>" + " / " + this.puesto +"</td></tr><tr><td>" + this.mail + " / " + this.num_cel + 
	      				"</td></tr><tr><td><a href='https://www.arbusta.net' target='_blank'>Arbusta</a> / <b>"+ this.loc +"</b></td></tr>" +
	      				"<tr><td><a href='https://es-la.facebook.com/arbustait/' target= '_blank'><img src='./icons/facebook.png'  width='13' height='13'></a>" +
	      				"<a href='https://twitter.com/arbustait' target='_blank'><img src='./icons/twitter.png'  width='13' height='13'</a>" +
	      				"<a href='https://www.linkedin.com/company/arbusta' target='_blank'><img src='./icons/linkedin.png' width='13' height='13'></a>"+
	      				"<a href='https://www.instagram.com/arbustait/' target='_blank'><img src='/icons/instagram.png' width='13' height='13'></a></td></tr></tr></table></font>";
      				}
				};
			}

		//creación de objetos tomando datos del formulario.
		var firma = new firma(document.getElementById('nombre').value,
							  document.getElementById('mail').value,
		  					  document.getElementById('puesto').value,
		   					  document.getElementById('num_cel').value,
		    				  	  document.getElementById('loc').value);
		//ejecución de métodos del objeto.
		firma.ofi();
		//firma.carTel();
		firma.generar();
	}
