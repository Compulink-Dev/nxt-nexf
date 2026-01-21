// components/dialogs/register-dialog.tsx
'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import {
  X,
  Plus,
  Minus,
  Building2,
  User,
  Phone,
  Mail,
  CreditCard,
  FileText,
  Download,
  Shield,
} from 'lucide-react'

interface Delegate {
  title: string
  fullName: string
  nationalID: string
  email: string
  mobile: string
}

interface RegisterDialogProps {
  isOpen: boolean
  onClose: () => void
  eventTitle: string
}

const RegisterDialog = ({ isOpen, onClose, eventTitle }: RegisterDialogProps) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    tel: '',
    mobile: '',
    email: '',
  })
  const [delegates, setDelegates] = useState<Delegate[]>([
    { title: '', fullName: '', nationalID: '', email: '', mobile: '' },
  ])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error'>('success')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleDelegateChange = (index: number, field: keyof Delegate, value: string) => {
    const updatedDelegates = [...delegates]
    updatedDelegates[index][field] = value
    setDelegates(updatedDelegates)
  }

  const addDelegate = () => {
    setDelegates([...delegates, { title: '', fullName: '', nationalID: '', email: '', mobile: '' }])
  }

  const removeDelegate = (index: number) => {
    if (delegates.length > 1) {
      setDelegates(delegates.filter((_, i) => i !== index))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setMessageType('success')
      setMessage('Registration successful! You will receive a confirmation email shortly.')

      // Reset form after success
      setTimeout(() => {
        setFormData({
          companyName: '',
          contactPerson: '',
          tel: '',
          mobile: '',
          email: '',
        })
        setDelegates([{ title: '', fullName: '', nationalID: '', email: '', mobile: '' }])
        onClose()
      }, 2000)
    } catch (error) {
      setMessageType('error')
      setMessage('Error registering for event. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Badge className="bg-green-600">
              <Shield className="h-3 w-3 mr-1" />
              Secure Registration
            </Badge>
            <span>Register for {eventTitle}</span>
          </DialogTitle>
          <DialogDescription>
            Complete the form below to register for this event. All fields are required.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Building2 className="h-5 w-5 text-green-600" />
              Company Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  placeholder="Enter company name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person for Payment *</Label>
                <Input
                  id="contactPerson"
                  name="contactPerson"
                  placeholder="Full name"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-5 w-5 text-green-600" />
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tel">Telephone Number *</Label>
                <Input
                  id="tel"
                  name="tel"
                  type="tel"
                  placeholder="+263 XXX XXX XXX"
                  value={formData.tel}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="+263 XXX XXX XXX"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="contact@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Delegates */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Delegates</h3>
              <Button
                type="button"
                onClick={addDelegate}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <Plus className="h-4 w-4" />
                Add Delegate
              </Button>
            </div>

            <div className="space-y-4">
              {delegates.map((delegate, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-4 relative">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-green-50">
                      Delegate {index + 1}
                    </Badge>
                    {delegates.length > 1 && (
                      <Button
                        type="button"
                        onClick={() => removeDelegate(index)}
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`title-${index}`}>Title</Label>
                      <Input
                        id={`title-${index}`}
                        placeholder="Mr./Ms./Dr."
                        value={delegate.title}
                        onChange={(e) => handleDelegateChange(index, 'title', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`fullName-${index}`}>Full Name *</Label>
                      <Input
                        id={`fullName-${index}`}
                        placeholder="John Doe"
                        value={delegate.fullName}
                        onChange={(e) => handleDelegateChange(index, 'fullName', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`nationalID-${index}`}>National ID *</Label>
                      <Input
                        id={`nationalID-${index}`}
                        placeholder="63-123456X78"
                        value={delegate.nationalID}
                        onChange={(e) => handleDelegateChange(index, 'nationalID', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`email-${index}`}>Email *</Label>
                      <Input
                        id={`email-${index}`}
                        type="email"
                        placeholder="delegate@company.com"
                        value={delegate.email}
                        onChange={(e) => handleDelegateChange(index, 'email', e.target.value)}
                        required
                      />
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor={`mobile-${index}`}>Mobile Number *</Label>
                      <Input
                        id={`mobile-${index}`}
                        type="tel"
                        placeholder="+263 XXX XXX XXX"
                        value={delegate.mobile}
                        onChange={(e) => handleDelegateChange(index, 'mobile', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Payment Information */}
          <div className="space-y-4 bg-green-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-green-600" />
              Payment Information
            </h3>

            <div className="space-y-2">
              <Badge className="bg-green-100 text-green-800">Conference Package</Badge>
              <p className="text-sm">
                <span className="font-semibold">US$ 350</span> – includes teas, lunch, memorabilia,
                and materials.
              </p>
            </div>

            <div className="space-y-2">
              <Badge className="bg-green-100 text-green-800">Bank Details</Badge>
              <div className="text-sm space-y-1">
                <p className="font-semibold">Account Name:</p>
                <p>NECF, A/C No: 2210129490220</p>
                <p>FBC, Samora Machel Avenue Branch, Branch Code: 8101</p>
              </div>
            </div>

            <div className="space-y-2">
              <Badge className="bg-green-100 text-green-800">For ZIG payments</Badge>
              <div className="text-sm">
                <p>Contact Mrs Agnes Kawiri (0773851644) or Ms Rudo Njerere (0773481088).</p>
                <p className="mt-1">
                  Send proof of payment to:
                  <br />
                  rnjerere@necf.org.zw, njerererudo@gmail.com
                </p>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full border-green-600 text-green-600 hover:bg-green-50"
              onClick={() => {
                // Download payment details
                const blob = new Blob(
                  [
                    `Payment Details for ${eventTitle}\n\n` +
                      `Conference Package: US$ 350\n` +
                      `Account Name: NECF\n` +
                      `Account Number: 2210129490220\n` +
                      `Bank: FBC, Samora Machel Avenue Branch\n` +
                      `Branch Code: 8101\n\n` +
                      `Contact for ZIG payments:\n` +
                      `Mrs Agnes Kawiri: 0773851644\n` +
                      `Ms Rudo Njerere: 0773481088\n\n` +
                      `Email proof to: rnjerere@necf.org.zw, njerererudo@gmail.com`,
                  ],
                  { type: 'text/plain' },
                )
                const url = URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = `${eventTitle.replace(/\s+/g, '-')}-payment-details.txt`
                a.click()
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Download Payment Details
            </Button>
          </div>

          {message && (
            <div
              className={`p-4 rounded-lg ${
                messageType === 'success'
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}
            >
              {message}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                  Processing...
                </>
              ) : (
                'Submit Registration'
              )}
            </Button>

            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default RegisterDialog
