"use client"
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'align',
  'direction',
  'code-block',
  'formula'
]

const StaffText = () => {
  return (
    <div style={{direction : 'ltr', textAlign : 'center', marginTop : '25px'}}>
      {/* <ReactQuill  formats={formats} theme="snow" /> */}
    </div>
  )
}

export default StaffText
