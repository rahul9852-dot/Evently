import React, { startTransition, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ICategory } from '@/lib/database/models/category.model'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from '../input'



type DropDownProps ={
  value?: string
  onChangeHandler?: () => void
}
const DropDown = ({value, onChangeHandler}: DropDownProps) => {
   const[categories, setCategory]=useState<ICategory[]>([
    // {_id:'1', name:'Category 1'},
    // {_id:'2', name:'Category 2'}

   ])
   const[newCategory, setNewCategory]= useState('');
   const handleCategory = () =>{
    
   }
  return (
    <div>
      <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field ">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
      {categories.length >0 &&  categories.map((category)=>(
        <SelectItem key={category._id} value={category._id}
        className="select-item p-regular-14">
          {category.name}
        </SelectItem>
      ))}
      <AlertDialog>
        <AlertDialogTrigger className='p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500'>Open</AlertDialogTrigger>
        <AlertDialogContent className='bg-white'>
          <AlertDialogHeader>
            <AlertDialogTitle>New Category</AlertDialogTitle>
            <AlertDialogDescription>
              <Input type="text" placeholder="Category name" className='input-field mt-3' onChange={(e)=> setNewCategory(e.target.value)} />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={()=>{
              startTransition(handleCategory)}}></AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      </SelectContent>
  </Select>

    </div>
  )
}

export default DropDown
