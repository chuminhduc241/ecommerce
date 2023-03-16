import axios from 'axios'
import ImageUploader from 'quill-image-uploader'
import React, { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import ReactQuill, { Quill } from 'react-quill'
import { toast } from 'react-toastify'
import { Button } from '~/components/Button'
import FormGroup from '~/components/common/FormGroup'
import FormRow from '~/components/common/FormRow'
import { Dropdown } from '~/components/Dropdown'
import ImageUpload from '~/components/Image/ImageUpload'
import { Input, Textarea } from '~/components/Input'
import { Label } from '~/components/Lable'
// import { apiURL, imgbbAPI } from 'config/config'
import 'react-quill/dist/quill.snow.css'
Quill.register('modules/imageUploader', ImageUploader)

const categoriesData = ['architecture', 'education']

const ProductAddNew = () => {
  const { handleSubmit, control, setValue, reset, watch } = useForm()
  const getDropdownLabel = (name: string, defaultValue = '') => {
    const value = watch(name) || defaultValue
    return value
  }
  const [content, setContent] = React.useState<string>('')

  const handleAddNewCampaign = async (values: any) => {
    try {
      // await axios.post(`${apiURL}/campaigns`, {
      //   ...values,
      //   content,
      //   startDate,
      //   endDate
      // })
      toast.success('Create campaign successfully')
    } catch (error) {
      toast.error('Can not create new campaign')
    }
    // values, startDate, endDate, content
  }
  const modules = useMemo(
    () => ({
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['link', 'image']
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData()
          bodyFormData.append('image', file)
          const response = await axios({
            method: 'post',
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          return response.data.data.url
        }
      }
    }),
    []
  )
  const handleSelectDropdownOption = (name: string, value: string) => {
    setValue(name, value)
  }
  return (
    <div className='bg-white rounded-xl py-10 px-[66px]'>
      <div className='text-center'>
        <h1 className='py-4 px-14 bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block mb-10'>
          Tạo mới sản phẩm 🚀
        </h1>
        <form onSubmit={handleSubmit(handleAddNewCampaign)}>
          <FormRow>
            <FormGroup>
              <Label>Tên sản phẩm *</Label>
              <Input control={control} name='name' placeholder='Nhập tên sản phẩm'></Input>
            </FormGroup>
            <FormGroup>
              <Label>Danh mục *</Label>
              <Dropdown>
                <Dropdown.Select placeholder={getDropdownLabel('category', 'chọn danh mục')}></Dropdown.Select>
                <Dropdown.List>
                  {categoriesData.map((category) => (
                    <Dropdown.Option key={category} onClick={() => handleSelectDropdownOption('category', category)}>
                      <span className='capitalize'>{category}</span>
                    </Dropdown.Option>
                  ))}
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label>Miêu tả *</Label>
            <Textarea name='description' placeholder='Nhập miêu tả....' control={control}></Textarea>
          </FormGroup>
          <FormGroup>
            <Label>Story *</Label>
            <ReactQuill
              placeholder='Write your story......'
              modules={modules}
              theme='snow'
              value={content}
              onChange={setContent}
            />
          </FormGroup>
          <FormRow>
            <FormGroup>
              <Label>Hình ảnh *</Label>
              <ImageUpload onChange={setValue} name='featured_image'></ImageUpload>
            </FormGroup>
            <FormGroup>"</FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Giá sản phẩm*</Label>
              <Input control={control} name='price' type='number' placeholder='$0.00 USD'></Input>
            </FormGroup>
            <FormGroup>
              <Label>Giá Khuyến mãi</Label>
              <Input control={control} name='priceSale' placeholder='$0.00 USD'></Input>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Amount Prefilled</Label>
              <Input control={control} name='prefilled' placeholder='Amount Prefilled'></Input>
              <p className='text-sm text-left text-text3'>
                It will help fill amount box by click, place each amount by comma, ex: 10,20,30,40
              </p>
            </FormGroup>
            <FormGroup>
              <Label>Video</Label>
              <Input control={control} name='video' placeholder='Video'></Input>
              <p className='text-sm text-left text-text3'>Place Youtube or Vimeo Video URL</p>
            </FormGroup>
          </FormRow>

          <div className='mt-10 text-center'>
            <Button type='submit' className='px-10 mx-auto text-white bg-primary'>
              Tạo mới sản phẩm
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductAddNew
