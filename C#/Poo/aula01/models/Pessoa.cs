using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aula01.models
{
    public class Pessoa
    {
        public string nome { get; set; }
        public int idade { get; set; }

        public void apresentar()
        {
            Console.WriteLine($"olá, meu nome é {nome}, e tenho {idade} anos");
        }
    }
}