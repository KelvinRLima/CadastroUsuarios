USE CONFITEC

CREATE TABLE TB_ESCOLARIDADE (
	ID INT PRIMARY KEY IDENTITY,
	DESCRICAO VARCHAR(20)
)

INSERT INTO TB_ESCOLARIDADE VALUES ('Infantil')
INSERT INTO TB_ESCOLARIDADE VALUES ('Fundamental')
INSERT INTO TB_ESCOLARIDADE VALUES ('M�dio')
INSERT INTO TB_ESCOLARIDADE VALUES ('Superior')

CREATE TABLE TB_USUARIOS (
	ID INT PRIMARY KEY IDENTITY,
	NOME VARCHAR(20),
	SOBRENOME VARCHAR(20),
	EMAIL VARCHAR(50),
	DATA_NASCIMENTO DATETIME,
	ID_ESCOLARIDADE INT CONSTRAINT ESCOLARIDADE_USUARIO_FK FOREIGN KEY (ID_ESCOLARIDADE) REFERENCES TB_ESCOLARIDADE (ID)
)