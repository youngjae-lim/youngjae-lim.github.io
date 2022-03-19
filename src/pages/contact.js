import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const contact = () => {
  return (
    <Layout>
      <Seo title='Contact' />
      <section className='contact-page'>
        <article className='contact-form'>
          <h3>Get in touch</h3>
          <p>
            Have a question you want answered? Is there something you would like
            me to write about on the blog? Just use the form below to reach out
            to me. If you are asking about a particular blog entry, please share
            the URL of the entry you are asking about.
          </p>
          <form action='https://formspree.io/f/xwkwnowe' method='POST'>
            <div className='form-group'>
              <input
                type='text'
                name='name'
                placeholder='name'
                className='form-control'
              />
              <input
                type='email'
                name='email'
                placeholder='email'
                className='form-control'
              />
              <textarea
                name='message'
                rows='5'
                placeholder='message'
                className='form-control'
              ></textarea>
            </div>
            <button type='submit' className='submit-btn btn'>
              Submit Here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
