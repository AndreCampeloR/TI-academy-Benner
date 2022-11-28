using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace exercicio1.models
{
    public class Gato : animal
    {
        public override void EmitirSom()
        {
            Console.WriteLine("MIAAAAAAAU MIAAAAAAAU");
        }
    }
}