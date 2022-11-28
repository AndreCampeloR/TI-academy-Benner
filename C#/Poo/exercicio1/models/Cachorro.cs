using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace exercicio1.models
{
    public class Cachorro : animal
    {
        public override void EmitirSom()
        {
            Console.WriteLine("AUAUAUAUAAUAUAUAUUA");
        }
    }
}