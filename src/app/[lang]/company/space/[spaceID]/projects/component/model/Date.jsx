"use client";

import DropDownModel from '@/app/[lang]/component/DropDownModel';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; 

const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
 }


export default function DatePicker({setDate =()=>{}}) {

    return (
        <DropDownModel setShowIcon={setDate}>
        <div className='h-full m-auto relative'>
  
        <div className="absolute z-2700 shadow-xl" style={{top:'36%'}}>
        <DateRangePicker
            className="fixed z-50"
            ranges={[selectionRange]}
            onChange={(ranges)=>{
               console.log(ranges)
               selectionRange.startDate = ranges.selection.startDate
               selectionRange.endDate = ranges.selection.endDate
            }}
            rangeColors={'#7f77f126'}
            startDatePlaceholder={'start date'}
            endDatePlaceholder={'end date'}
          />
          </div>
          </div>
    </DropDownModel>
    );

}