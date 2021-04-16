using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClientForMathsLibrary.ServiceReference1;

namespace ClientForMathsLibrary
{
    class Program
    {
        static void Main(string[] args)
        {
            MathsOperationsClient mathOperation = new MathsOperationsClient();
            Console.WriteLine(mathOperation.Substract(15, 9));
            while (true)
            {

            }
        }
    }
}
