using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aula03.models
{
    public class ContaPoupanca
    {
        public string? name {get; set;}
        public int numero {get; set;}
        public int agencia {get; set;}
        public double saldo {get; set;}
        public double juros {get; set;}
    }
}