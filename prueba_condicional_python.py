print("verificacion de acceso")

edad_usuario=int(input("introduce tu edad: "))

if edad_usuario<18:
	print('no puede pasar')
elif edad_usuario>100:
	print('edad incorrecta')
else:
	print('puedes pasar')

print('el programa ha finalizado')


