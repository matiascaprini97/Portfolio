"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(
  prevState: { message: string; error: boolean | null },
  formData: FormData
) {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Error de validación. Por favor, revisa los campos.",
      error: true,
    };
  }
  
  try {
    // Here you would typically send an email, e.g., using a service like Resend or Nodemailer.
    // For this example, we'll just log the data to the console.
    console.log("Form data submitted:", validatedFields.data);

    return {
      message: "¡Gracias! Tu mensaje ha sido enviado con éxito.",
      error: false,
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      message: "Ocurrió un error al enviar el mensaje. Por favor, intenta de nuevo.",
      error: true,
    };
  }
}
