--
-- PostgreSQL database dump
--

-- \restrict 84xlJyOaXmXeBbXwMgBYvMxD6PCOu628iJpK7eA3pMfPPNGA5lUkhEgeMJwdue1

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

-- Started on 2026-10-31 22:51:39 CET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 227 (class 1259 OID 16568)
-- Name: course_students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course_students (
    course_id integer NOT NULL,
    student_id integer NOT NULL
);


ALTER TABLE public.course_students OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16556)
-- Name: courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courses (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    teacher_id integer
);


ALTER TABLE public.courses OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16555)
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.courses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.courses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 220 (class 1259 OID 16521)
-- Name: houses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.houses (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    color character varying(100),
    founder character varying(100)
);


ALTER TABLE public.houses OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16520)
-- Name: houses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.houses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.houses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 224 (class 1259 OID 16542)
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    year integer NOT NULL,
    house_id integer
);


ALTER TABLE public.students OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16541)
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.students ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.students_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 222 (class 1259 OID 16529)
-- Name: teachers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teachers (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    house_id integer
);


ALTER TABLE public.teachers OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16528)
-- Name: teachers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.teachers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.teachers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3859 (class 0 OID 16568)
-- Dependencies: 227
-- Data for Name: course_students; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.course_students VALUES (1, 1);
INSERT INTO public.course_students VALUES (1, 2);
INSERT INTO public.course_students VALUES (1, 3);
INSERT INTO public.course_students VALUES (2, 1);
INSERT INTO public.course_students VALUES (2, 2);
INSERT INTO public.course_students VALUES (2, 4);


--
-- TOC entry 3858 (class 0 OID 16556)
-- Dependencies: 226
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (2, 'Charms', NULL);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (3, 'Transfiguration', NULL);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (4, 'Defence Against the Dark Arts', NULL);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (6, 'Advanced Herbology', NULL);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (1, 'Potions', 1);


--
-- TOC entry 3852 (class 0 OID 16521)
-- Dependencies: 220
-- Data for Name: houses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (1, 'Gryffindor', 'Red', 'Godric Gryffindor');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (2, 'Slytherin', 'Green', 'Salazar Slytherin');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (3, 'Ravenclaw', 'Blue', 'Rowena Ravenclaw');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (4, 'Hufflepuff', 'Yellow', 'Helga Hufflepuff');


--
-- TOC entry 3856 (class 0 OID 16542)
-- Dependencies: 224
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (1, 'Harry Potter', 5, 1);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (2, 'Hermione Granger', 5, 1);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (3, 'Ron Weasley', 5, 1);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (4, 'Draco Malfoy', 5, 2);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (6, 'Luna Lovegood', 5, 3);


--
-- TOC entry 3854 (class 0 OID 16529)
-- Dependencies: 222
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (1, 'Minerva McGonagall', 1);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (2, 'Severus Snape', 2);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (3, 'Filius Flitwick', 3);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (5, 'Professor Remus Lupin', 1);


--
-- TOC entry 3865 (class 0 OID 0)
-- Dependencies: 225
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_id_seq', 6, true);


--
-- TOC entry 3866 (class 0 OID 0)
-- Dependencies: 219
-- Name: houses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.houses_id_seq', 4, true);


--
-- TOC entry 3867 (class 0 OID 0)
-- Dependencies: 223
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.students_id_seq', 6, true);


--
-- TOC entry 3868 (class 0 OID 0)
-- Dependencies: 221
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teachers_id_seq', 6, true);


--
-- TOC entry 3698 (class 2606 OID 16574)
-- Name: course_students course_students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_students
    ADD CONSTRAINT course_students_pkey PRIMARY KEY (course_id, student_id);


--
-- TOC entry 3696 (class 2606 OID 16562)
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- TOC entry 3690 (class 2606 OID 16527)
-- Name: houses houses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.houses
    ADD CONSTRAINT houses_pkey PRIMARY KEY (id);


--
-- TOC entry 3694 (class 2606 OID 16549)
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- TOC entry 3692 (class 2606 OID 16535)
-- Name: teachers teachers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);


--
-- TOC entry 3702 (class 2606 OID 16575)
-- Name: course_students fk_course; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_students
    ADD CONSTRAINT fk_course FOREIGN KEY (course_id) REFERENCES public.courses(id) NOT VALID;


--
-- TOC entry 3701 (class 2606 OID 16563)
-- Name: courses fk_course_teacher; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT fk_course_teacher FOREIGN KEY (teacher_id) REFERENCES public.teachers(id) NOT VALID;


--
-- TOC entry 3703 (class 2606 OID 16580)
-- Name: course_students fk_student; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_students
    ADD CONSTRAINT fk_student FOREIGN KEY (student_id) REFERENCES public.students(id) NOT VALID;


--
-- TOC entry 3700 (class 2606 OID 16550)
-- Name: students fk_student_house; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT fk_student_house FOREIGN KEY (house_id) REFERENCES public.houses(id);


--
-- TOC entry 3699 (class 2606 OID 16536)
-- Name: teachers fk_teacher_house; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT fk_teacher_house FOREIGN KEY (house_id) REFERENCES public.houses(id);


-- Completed on 2026-10-31 22:52:12 CET

--
-- PostgreSQL database dump complete
--

-- \unrestrict 84xlJyOaXmXeBbXwMgBYvMxD6PCOu628iJpK7eA3pMfPPNGA5lUkhEgeMJwdue1

