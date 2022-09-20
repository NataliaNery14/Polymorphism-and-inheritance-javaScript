class Animal {
	String nome;
	int idade;
	
	
	public void emitirSom()
	{
		System.out.println(" bichinhos bonitinhos !");
	}
}
class cachorro;

class Cachorro extends Animal {
	
	public void correr()
	{
		System.out.println("Cachorro correndo...");
	}
	
	public void emitirSom()
	{
		System.out.println("AU AU AU!");
	}
}
Sub class cavalo;

public class Cavalo extends Animal {
	
	public void correr()
	{
		System.out.println("Cavalo correndo...");
	}
	
	public void emitirSom()
	{
		System.out.println("IRRRIINN");
	}
}
Sub class preguica;

public class Preguica extends Animal {
	
	public void subirArvore()
	{
		System.out.println("Preguica subindo em arvores...");
	}
	
	public void emitirSom()
	{
		System.out.println("Bem devagar! kkkkkk");
	}
