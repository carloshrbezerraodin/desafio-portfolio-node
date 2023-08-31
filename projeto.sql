CREATE TABLE IF NOT EXISTS public.projeto
(
    id bigint NOT NULL DEFAULT nextval('projeto_id_seq'::regclass),
    nome character varying(255) COLLATE pg_catalog."default" NOT NULL,
    data_inicio timestamp(6) without time zone,
    data_previsao_fim timestamp(6) without time zone,
    data_fim timestamp(6) without time zone,
    descricao character varying(255) COLLATE pg_catalog."default",
    status character varying(255) COLLATE pg_catalog."default",
    orcamento real,
    risco character varying(255) COLLATE pg_catalog."default",
    idgerente bigint NOT NULL DEFAULT nextval('projeto_idgerente_seq'::regclass),
    CONSTRAINT pk_projeto PRIMARY KEY (id),
    CONSTRAINT fk_gerente FOREIGN KEY (idgerente)
        REFERENCES public.pessoa (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)