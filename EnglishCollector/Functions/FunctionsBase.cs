using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishCollector.Functions
{
    public static class FB
    {
        public static bool IsNothing(Object item)
        {
            if(item == null)
            {
                return true;
            }
            else if(item is string)
            {
                return ((string)item).Replace(" ", "") == "";
            }
            else
            {
                return false;
            }
        }

        public static bool ValidateString(string value, int length, string valueName, bool isRequired, IList<string> messages)
        {
            if (IsNothing(value))
            {
                if (isRequired)
                {
                    messages.Add(valueName + " is Required");
                    return false;
                }
                else
                {
                    return true;
                }
            }
            else
            {
                if (value.Length > length)
                {
                    messages.Add(valueName + " length could not more than " + length);
                    return false;
                }
                else
                {
                    return true;
                }
            }
        }
    }



    
}
