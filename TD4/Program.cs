using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TD4.Calculator;

namespace TD4
{
    class Program
    {
        static void Main(string[] args)
        {
            //CalculatorSoapClient calc = new CalculatorSoapClient(new CalculatorSoapClient.EndpointConfiguration(), "http://www.dneonline.com/calculator.asmx?wsdl");
            CalculatorSoapClient calc = new CalculatorSoapClient();
            Console.WriteLine(calc.Add(12, 4));
            while (true)
            {

            }
        }
    }
}
