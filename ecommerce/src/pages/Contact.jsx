import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    firstName: Yup.string()
      .required('First name is required'),
    lastName: Yup.string()
      .required('Last name is required'),
    phoneNumber: Yup.string()
          .required("phone number is required."),
    message: Yup.string()
      .required('Message is required')
      .min(10, 'Message must be at least 10 characters')
      .max(500, 'Message must not exceed 500 characters')
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {

    setShowSuccess(true);

    resetForm();

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);

    setSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      {showSuccess && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          Thank you for contacting us! We will get back to you soon.
        </div>
      )}

      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
          phoneNumber: '',
          message: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <Field
                  type="text"
                  name="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <Field
                  type="text"
                  name="lastName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <Field
                type="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <Field
                type="tel"
                name="phoneNumber"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <Field
                as="textarea"
                name="message"
                rows="6"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-vertical"
                placeholder="Please enter your message..."
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 text-white py-3 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50 font-medium"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;