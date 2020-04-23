
export default function HeaderAnimation () 
{
	// Propriedades
	this.cabecalho;
	this.deslocar;

	// Metodos
	this.scrollAnimation = ( widthDevice, scrollVertical ) => 
	{
		if ( widthDevice <= 768)
		{
			if (!this.deslocar)
			{
				this.hide();
				this.deslocar = true;
			}
			if (scrollVertical <= 0)
			{
				this.show();
				this.deslocar = false;
			}
		}
	}

	this.resize = () =>
	{
		this.cabecalho.style.top = '0px';
		this.deslocar = false;
	}

	this.hide = () =>
	{
		this.cabecalho.style.transition = 'top .5s ease';
		this.cabecalho.style.top = '-70px';
	}

	this.show = () =>
	{
		this.cabecalho.style.top = '0px';
	}
}


