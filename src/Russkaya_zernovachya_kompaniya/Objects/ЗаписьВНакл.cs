﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Russkaya_zernovachya_kompaniya
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Запись в накл.
    /// </summary>
    // *** Start programmer edit section *** (ЗаписьВНакл CustomAttributes)

    // *** End programmer edit section *** (ЗаписьВНакл CustomAttributes)
    [AutoAltered()]
    [Caption("Запись в накл")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаписьВНаклE", new string[] {
            "Цена as \'Цена\'",
            "Количество as \'Количество\'"})]
    [View("ЗаписьВНаклL", new string[] {
            "Цена as \'Цена\'",
            "Количество as \'Количество\'"})]
    public class ЗаписьВНакл : ICSSoft.STORMNET.DataObject
    {
        
        private double fЦена;
        
        private int fКоличество;
        
        // *** Start programmer edit section *** (ЗаписьВНакл CustomMembers)

        // *** End programmer edit section *** (ЗаписьВНакл CustomMembers)

        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (ЗаписьВНакл.Количество CustomAttributes)

        // *** End programmer edit section *** (ЗаписьВНакл.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (ЗаписьВНакл.Количество Get start)

                // *** End programmer edit section *** (ЗаписьВНакл.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (ЗаписьВНакл.Количество Get end)

                // *** End programmer edit section *** (ЗаписьВНакл.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаписьВНакл.Количество Set start)

                // *** End programmer edit section *** (ЗаписьВНакл.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (ЗаписьВНакл.Количество Set end)

                // *** End programmer edit section *** (ЗаписьВНакл.Количество Set end)
            }
        }
        
        /// <summary>
        /// Цена.
        /// </summary>
        // *** Start programmer edit section *** (ЗаписьВНакл.Цена CustomAttributes)

        // *** End programmer edit section *** (ЗаписьВНакл.Цена CustomAttributes)
        public virtual double Цена
        {
            get
            {
                // *** Start programmer edit section *** (ЗаписьВНакл.Цена Get start)

                // *** End programmer edit section *** (ЗаписьВНакл.Цена Get start)
                double result = this.fЦена;
                // *** Start programmer edit section *** (ЗаписьВНакл.Цена Get end)

                // *** End programmer edit section *** (ЗаписьВНакл.Цена Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаписьВНакл.Цена Set start)

                // *** End programmer edit section *** (ЗаписьВНакл.Цена Set start)
                this.fЦена = value;
                // *** Start programmer edit section *** (ЗаписьВНакл.Цена Set end)

                // *** End programmer edit section *** (ЗаписьВНакл.Цена Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаписьВНаклE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаписьВНаклE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаписьВНаклE", typeof(IIS.Russkaya_zernovachya_kompaniya.ЗаписьВНакл));
                }
            }
            
            /// <summary>
            /// "ЗаписьВНаклL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаписьВНаклL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаписьВНаклL", typeof(IIS.Russkaya_zernovachya_kompaniya.ЗаписьВНакл));
                }
            }
        }
    }
}
