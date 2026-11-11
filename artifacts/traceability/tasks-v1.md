# Traceability: Requirement → Jira → Test (v1)

Источник: Confluence pageId=2129921 «Пример требований для анализа (полный flow)», version 6
https://lilianikita.atlassian.net/wiki/pages/viewpage.action?pageId=2129921

| REQ | Jira | Testomat test IDs | Покрытие |
|---|---|---|---|
| REQ-01 | KAN-169 | 6ab66ec6, a0130abe | + / + |
| REQ-02 | KAN-172 | 0bf61013, 9a22c5b2, a36a3ccc | + (3 сценария, включая негативный и граничный) |
| REQ-03 | KAN-174 | 6d95dd3a, 02699019 | + |
| REQ-04 | KAN-176 | b23e85a1 | + |
| REQ-05 | KAN-177 | fbb7ee95 | + |
| REQ-06 | KAN-179 | c3606257 | + |
| REQ-07 | KAN-182 | 314e9d4e | + |
| REQ-08 | KAN-183 | f932b875, 298c4680, 1da06a55 | + |
| REQ-09 | KAN-184 | 2b0cfaf1, 29c5bc2f, a80d16f2 | + |
| REQ-10 | KAN-185 | 9c9200ea, 5e61cea4 | + |
| REQ-11 | KAN-186 | 2514a0c7 | + |
| REQ-12 | KAN-187 | 35ea82c6 | + |
| REQ-13 | KAN-188 | fe670df9 | + (негативный) |
| REQ-14 | KAN-189 | c81601c9, ec29d073 | + |
| REQ-15 | KAN-190 | 5c791716, 693bb464 | + (включая граничное 500 руб.) |
| REQ-16 | KAN-191 | f27fd9a8 | + |
| REQ-17 | KAN-192 | bb25d7b3 | + |
| REQ-18 | KAN-193 | 3e11998b, 9f9dcb81 | + |
| REQ-19 | KAN-194 | 984e0d17, 47d55cf6 | + |
| REQ-20 | KAN-195 | c2778423, 01f932cc, 70d5450e | + |
| REQ-21 | KAN-196 | ea350971, 29283f7a | + (негативные) |
| REQ-22 | KAN-197 | 5121f9e7 | + |
| REQ-23 | KAN-198 | 076955b0 | + |
| REQ-24 | KAN-199 | da013453, 26379168 | + |
| REQ-25 | KAN-200 | 7c23ca04, ab9bb788 | + |
| REQ-26 | KAN-201 | d5274119 | + |
| REQ-27 | KAN-202 | 2ba72aca | + |
| REQ-28 | KAN-203 | f47aa1b8, d30a6871 | + |
| REQ-29 | KAN-204 | db984ecf | + |
| REQ-30 | KAN-205 | bf7bb806 | + |
| REQ-31 | KAN-206 | 571bb193 | + |
| REQ-32 | KAN-207 | 795185bb | + |

- Всего REQ: 32. Покрыто тестами: 32/32 (100%).
- Всего тестов: 51. Все тесты связаны с Jira-задачей через issues_link (url https://lilianikita.atlassian.net/browse/KAN-…).
- Связь «тест → требование» зафиксирована в описании теста (Requirement: REQ-xx; Источник: Confluence pageId=2129921 v6) и на уровне сьютов через требование Testomat 98b9454e.
- По отклонённым пунктам задач и тестов нет (rejected_requirements = []).
