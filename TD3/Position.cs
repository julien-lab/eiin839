using System;
using System.Collections.Generic;
using System.Text;

namespace TD3
{
    class Position
    {
        public float lat { get; set; }
        public float lng { get; set; }

        public override string ToString()
        {
            return "[" + lat + ", " + lng + "]";
        }

    }
}