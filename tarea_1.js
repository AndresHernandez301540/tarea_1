// 1 Baja el archivo grades.json y en la terminal ejecuta el siguiente comando:
mongoimport -d students -c grades < grades.json
// 2 El conjunto de datos contiene 4 calificaciones de n estudiantes.
// Confirma que se importo correctamente la colección con los siguientes comandos en la terminal de mongo:
use students;
// 2 ¿Cuántos registros arrojo el comando count?
// R. 800
db.grades.count()
// 3 Encuentra todas las calificaciones del estudiante con el id numero 4
// R. 27.2900 , 87.8907 , 5.2444 , 28.6564
db.grades.find({student_id:4},{score:1});
// 4 ¿Cuántos registros hay de tipo exam?
// R. 200
db.grades.count({type:'exam'});
// 5 ¿Cuántos registros hay de tipo homework?
// R. 400
db.grades.count({type:'homework'});
// 6 ¿Cuántos registros hay de tipo quiz?
// R. 200
db.grades.count({type:'quiz'});
// 7 Elimina todas las calificaciones del estudiante con el id numero 3
// R. { "acknowledged" : true, "deletedCount" : 4 }
db.grades.deleteMany({student_id:3});
// 8 ¿Qué estudiantes obtuvieron 75.29561445722392 en una tarea ?
// R. { "_id" : ObjectId("50906d7fa3c412bb040eb59e"), "student_id" : 9, "type" : "homework", "score" : 75.29561445722392 }
// El estudiante 9
db.grades.find({score:75.29561445722392});
// 9 Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100
// R.

// 10 A qué estudiante pertenece esta calificación.
// R.
db.grades.find({"_id" : ObjectId("50906d7fa3c412bb040eb591")});
