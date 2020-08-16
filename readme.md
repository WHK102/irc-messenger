# IRC Messenger

![Captura de pantalla - Contactos](./caps/contacts.png)


## Instrucciones

Para instalar las dependencias se debe ejecutar:

```bash
# Modo desarrollo
npm install

# Modo productivo
npm install --production
```

Para ejecutar la aplicación se debe usar:

```bash
npm start
```

## ¿Qué es?

La idea principal es que el cliente se pueda conectar simultaneamente a
multiples servidores IRC y verificar la existencia de contactos por servidor
y abrir ventanas para charlar sin tener que entrar en los canales, a demas de
tener la opcion de unirse a salas de servidores guardados, la idea es que los
nicks sean del tipo `nick@servidor`, de esta manera se diferenciará a que
servidor pertenece cada contacto y gestionarlos todos desde una misma app
usando varios servidores simultaneamente.

Se agregarán smiles basados en gif animados pequeños como se hacía antiguamente
en Msn y Yahoo Messenger, utilización de colores y demás ajustandose a los
estandares ascii y a los del protocolo irc.

Mi inspiración se basa en el antiguo sistema de mensajería y chat de Yahoo
Messenger para escritorio, dado de baja el 2010, pero utilizando los servicios
desentralizados de servidores IRC.


## Lista de cambios

**No estable**. Este proyecto aun no es funcional.
