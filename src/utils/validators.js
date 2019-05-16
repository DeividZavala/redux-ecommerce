export const isRequired = value => value ? undefined : "Este campo en requerido";

export const minLng = value => value.length < 4 ? "Lo tienes muy chico" : undefined;

export const maxLng = value => value.length > 15 ? "Ya esta muy grande, maximo 15 caracteres" : undefined;

export const minPrice = value => Number(value) > 5 ? undefined : "El precio minimo es de $5 pesitos como el rico pollo";

export const minImages = value => value && value.split(",").length < 1 ? "Agrega minimo una imagen" : undefined;

export const passwordMatch = (value, allvalues) => value === allvalues.password ? undefined : "Las contraseñas con coinciden";

// Nomalized
export const maxCharacters = value => value.substr(0, 16);