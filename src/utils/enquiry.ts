export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone?: string;
  preferredProgramme: string;
  preferredPlan: string;
  message: string;
}

export interface ValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  preferredProgramme?: string;
  message?: string;
}

export function validateEnquiryForm(data: Partial<EnquiryFormData>): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  const trimmedName = (data.fullName || '').trim();
  if (!trimmedName) {
    errors.fullName = 'Please enter your full name.';
  } else if (trimmedName.length < 2) {
    errors.fullName = 'Name must be at least 2 characters long.';
  }

  const trimmedEmail = (data.email || '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Please provide an email address.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (data.phone) {
    const trimmedPhone = data.phone.trim();
    // Allow digits, spaces, plus, hyphens, min 7 chars
    const phoneRegex = /^[0-9+\s-]{7,18}$/;
    if (trimmedPhone && !phoneRegex.test(trimmedPhone)) {
      errors.phone = 'Please provide a valid phone number (digits and optional +).';
    }
  }

  if (!data.preferredProgramme || data.preferredProgramme.trim() === '') {
    errors.preferredProgramme = 'Please select a preferred programme or facility focus.';
  }

  const trimmedMessage = (data.message || '').trim();
  if (trimmedMessage.length > 500) {
    errors.message = 'Message must be under 500 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatWhatsAppMessage(data: {
  clubName: string;
  programme?: string;
  plan?: string;
  senderName?: string;
}): string {
  const parts: string[] = [`Hello ${data.clubName}, I would like to enquire about your training club.`];
  if (data.programme) {
    parts.push(`Interested Programme: ${data.programme}`);
  }
  if (data.plan) {
    parts.push(`Membership Plan: ${data.plan}`);
  }
  if (data.senderName) {
    parts.push(`Name: ${data.senderName}`);
  }
  parts.push('(Portfolio Concept Demo Inquiry)');
  return parts.join('\n');
}

export function buildWhatsAppUrl(phoneNumber: string | null | undefined, message: string): {
  url: string;
  isConfigured: boolean;
} {
  const cleaned = (phoneNumber || '').replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(message);
  
  // If no real phone number is set (or placeholder with all zeros)
  if (!cleaned || cleaned === '0000000000' || cleaned === '910000000000' || cleaned.length < 8) {
    return {
      url: `https://wa.me/?text=${encoded}`,
      isConfigured: false,
    };
  }

  return {
    url: `https://wa.me/${cleaned}?text=${encoded}`,
    isConfigured: true,
  };
}
