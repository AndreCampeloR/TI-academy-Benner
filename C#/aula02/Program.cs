int acumulador = 0;
int numero = 1;

// for (int i = 1; i <= 10; i++)

while (numero != 0)
{
    numero = Convert.ToInt32(Console.ReadLine());
    acumulador = acumulador + numero;
}

Console.WriteLine($"A soma dos números é: {acumulador}");
