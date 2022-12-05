using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using aula05.interfaces;

namespace aula05.models
{
   public class ContaCorrente : Conta, IConta
    {
        public double Tarifa { get; set; }

        public override void ExibirTipoDeConta()
        {
            base.ExibirTipoDeConta();
            Console.WriteLine("Conta Corrente");
        }

        public override void ExibirResumoConta()
        {
            base.ExibirResumoConta();
            Console.WriteLine($"Tarifa: {Tarifa}");
        }

        public void EncerrarConta()
        {
            Console.WriteLine("Encerrando a conta corrente");
        }
    }
}