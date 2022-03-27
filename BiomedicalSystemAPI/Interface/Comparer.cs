using BiomedicalSystemAPI.Models.HealthAppContext;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace BiomedicalSystemAPI.Interface
{
    public class Comparer<T> : IEqualityComparer<T>  where T:class
    {
        private PropertyInfo _PropertyInfo;

        public Comparer(string propertyName)
        {
            //store a reference to the property info object for use during the comparison
            _PropertyInfo = typeof(T).GetProperty(propertyName);          
        }

        public bool Equals(T x, T y)
        {
            //get the current value of the comparison property of x and of y
            object xValue = _PropertyInfo.GetValue(x, null);
            object yValue = _PropertyInfo.GetValue(y, null);

            //if the xValue is null then we consider them equal if and only if yValue is null
            if (xValue == null)
                return yValue == null;

            //use the default comparer for whatever type the comparison property is.
            return xValue.Equals(yValue);
        }

        public int GetHashCode([DisallowNull] T obj)
        {
            //If obj is null then return 0
            if (obj == null)
            {
                return 0;
            }
            //Get the ID hash code value
            int HashCode = obj.GetHashCode();
            //Get the string HashCode Value
            //Check for null refernece exception
            int OHashCode = obj == null ? 0 : obj.GetHashCode();
            return OHashCode ^ HashCode;
        }
    }

    //class 
    //{
    //    public bool Equals(OrganizationViewModel x, OrganizationViewModel y)
    //    {
    //        //First check if both object reference are equal then return true
    //        if (object.ReferenceEquals(x, y))
    //        {
    //            return true;
    //        }
    //        //If either one of the object refernce is null, return false
    //        if (object.ReferenceEquals(x, null) || object.ReferenceEquals(y, null))
    //        {
    //            return false;
    //        }
    //        //Comparing all the properties one by one
    //        return x.Id == y.Id;
    //    }

    //    public int GetHashCode([DisallowNull] OrganizationViewModel obj)
    //    {
    //        //If obj is null then return 0
    //        if (obj == null)
    //        {
    //            return 0;
    //        }
    //        //Get the ID hash code value
    //        int IDHashCode = obj.Id.GetHashCode();
    //        //Get the string HashCode Value
    //        //Check for null refernece exception
    //        int NameHashCode = obj.Name == null ? 0 : obj.Name.GetHashCode();
    //        return IDHashCode ^ NameHashCode;
    //    }
    //}
}
