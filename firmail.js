//ejecutor de script
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
						this.loc = "ROS";
					}else if(this.loc == "BA"){
						this.loc == "BA";
					}else if(this.loc == "CM"){
						this.loc = "COL";
					}

				};

				//método consulta y formato de firma.
				this.generar = function(){ 
					//consula por campos vacíos
					if((this.puesto == "Seleccionar")|(this.mail == "")|(this.nombre == "") | (this.num_cel == "") | (this.loc =="Seleccionar") | (this.car == "Seleccionar")){
      				alert("Debe completar todos los campos");
      			}else{ 
      				//formato de firma
					document.getElementById("firma").innerHTML = "<font size='1'><table><tr><img src='https://scontent.fros2-2.fna.fbcdn.net/v/t1.0-1/p720x720/16939163_1349458735097462_4295419607028443057_n.png?_nc_cat=0&oh=7df1f7e50dfc21d84b092f223a49a1ee&oe=5BC55F2A' width='70' height='70' style='float:left'><tr><td><b>" + this.nombre +"</b>" + " / " + this.puesto +"</td></tr><tr><td>" + this.mail + " / " + this.num_cel + 
	      				"</td></tr><tr><td><a href='https://www.arbusta.net' target='_blank'>Arbusta</a> / <b>"+ this.loc +"</b></td></tr>" +
	      				"<tr><td><a href='https://es-la.facebook.com/arbustait/' target= '_blank'><img src='https://cdn.icon-icons.com/icons2/285/PNG/256/social_facebook_box_blue_256_30649.png'  width='13' height='13'></a>" +
	      				"<a href='https://twitter.com/arbustait' target='_blank'><img src='https://cdn.icon-icons.com/icons2/122/PNG/512/twitter_socialnetwork_20007.png'  width='13' height='13'</a>" +
	      				"<a href='https://www.linkedin.com/company/arbusta' target='_blank'><img src='https://cdn.icon-icons.com/icons2/99/PNG/512/linkedin_socialnetwork_17441.png' width='13' height='13'></a>"+
	      				"<a href='https://www.instagram.com/arbustait/' target='_blank'><img src='https://cdn.icon-icons.com/icons2/195/PNG/256/Instagram_23558.png' width='13' height='13'></a></td></tr></tr></table></font>";
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
