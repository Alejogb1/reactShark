import { useEffect, useRef, useState } from 'react'

import siteMetadata from '@/data/siteMetadata'
import { supabase } from '../supabaseClient'
const NewsletterForm = ({ title = 'Subscribe to the newsletter' }) => {
  const inputEl = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()

    const submit = async () => {}
    if (error) {
      setError(true)
      setMessage('Your e-mail address is invalid or you are already subscribed!')
      return
    }

    const supabaseValue = inputEl.current.value

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    const { error, data } = supabase.from('newsletter_rs').insert([supabaseValue])

    setMessage('Successfully! 🎉 You are now subscribed.')
  }

  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</div>
      <form
        className="flex flex-col sm:flex-row"
        method="POST"
        action="https://429c8f9b.sibforms.com/serve/MUIEAN0ny4nCo3dYSC4r-K3lrYN14smZ9D_cdQuep5KY9Ba8DLn6i8m1L1F6ISBFTDbqva7u5d1_8gAfCv6D1dq9CF94g-aLjMSuyg2m5WOpTgQUZb_UVqBLVF9KeJsYXGcKHrH381_rZ5zt8iKxWpKogGZsx3DlyLoqYug4W60crk_4zvn1utByQLExuESZRgJBGK4_hZufvfig"
      >
        <div className="flex w-full mt-2 rounded-md shadow-sm sm:mt-0 sm:ml-3">
          <button
            style={{ backgroundColor: 'blue' }}
            className={`py-2 sm:py-0 w-full bg-orange-500 px-4 rounded-md font-medium text-white ${
              subscribed ? 'cursor-default' : 'hover:bg-orange-700 dark:hover:bg-orange-400'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 dark:ring-offset-black`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed ? 'Thank you!' : 'Go to sign up'}
          </button>
        </div>
      </form>
      {error && (
        <div className="pt-2 text-sm text-red-500 w-72 sm:w-96 dark:text-red-400">{message}</div>
      )}
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="p-6 bg-gray-100 dark:bg-gray-800 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)
