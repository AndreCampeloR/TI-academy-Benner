string volta = "Sim";
do
{
double soma = 0;
double aprovacao;
Console.WriteLine("Digite a quantidade de notas a ser calculada");

int notas = Convert.ToInt32(Console.ReadLine());

for (int i = 1; i <= notas; i++)
{
Console.WriteLine("digite a " + i + "°" + " Nota:");

double nota = Convert.ToInt32(Console.ReadLine());
    
soma += nota;
}

aprovacao = (soma / notas);

Console.WriteLine("A média do aluno foi de: "+ aprovacao.ToString("F"));

if (aprovacao >= 6)
{
    Console.WriteLine("Parabéns, Você passou!");
} else
{
    Console.WriteLine("Que pena, Você reprovou!");
}

Console.WriteLine("Deseja calcular outra média? (Sim para calcular)");

 volta = Convert.ToString(Console.ReadLine());

} while (volta == "Sim");



