# Como rodar o back

### Baixar dependências
#### Primeiro criar a venv, exemplo linux:
``
virtualenv venv
``
#### Segundo instalar as dependências com o pip:
``
pip install -r requirements.txt
``

### Executar programa
primeiro é importante configurar o flask:
``
export FLASK_APP=app.py
``
e
``
export FLASK_DEBUG=1
``

para rodar é só dar um:
``
flask run
``

## Caso não tenha o virtualenv e pip:
<https://gist.github.com/Geoyi/d9fab4f609e9f75941946be45000632b>

<https://linuxize.com/post/how-to-install-pip-on-ubuntu-20.04/>