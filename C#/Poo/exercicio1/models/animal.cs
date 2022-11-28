using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace exercicio1.models
{
    public class animal
    {
        public string? Raca { get; set; }

        public double Tamanho { get; set; }

        public virtual void EmitirSom(){
        }
    }
}