// 1 Baja el archivo grades.json y en la terminal ejecuta el siguiente comando:
mongoimport -d students -c grades < grades.json
// 2 El conjunto de datos contiene 4 calificaciones de n estudiantes.
// Confirma que se importo correctamente la colección con los siguientes comandos en la terminal de mongo:
use students;

// 2 ¿Cuántos registros arrojo el comando count?
db.grades.count()
// R. 800

// 3 Encuentra todas las calificaciones del estudiante con el id numero 4
db.grades.find({student_id:4},{score:1});
// R. 27.2900 , 87.8907 , 5.2444 , 28.6564

// 4 ¿Cuántos registros hay de tipo exam?
db.grades.count({type:'exam'});
// R. 200

// 5 ¿Cuántos registros hay de tipo homework?
db.grades.count({type:'homework'});
// R. 400

// 6 ¿Cuántos registros hay de tipo quiz?
db.grades.count({type:'quiz'});
// R. 200

// 7 Elimina todas las calificaciones del estudiante con el id numero 3
db.grades.deleteMany({student_id:3});
// R. { "acknowledged" : true, "deletedCount" : 4 }

// 8 ¿Qué estudiantes obtuvieron 75.29561445722392 en una tarea ?
db.grades.find({score:75.29561445722392});
// R. { "_id" : ObjectId("50906d7fa3c412bb040eb59e"), "student_id" : 9, "type" : "homework", "score" : 75.29561445722392 }
// El estudiante 9

// 9 Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100
db.grades.update({ "_id" : ObjectId("50906d7fa3c412bb040eb591")},{$set:{score:100}});
// R.WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

// 10 A qué estudiante pertenece esta calificación.
db.grades.find({"_id" : ObjectId("50906d7fa3c412bb040eb591")});
// R.{"_id" : ObjectId("50906d7fa3c412bb040eb591"),"student_id" : 6,"type" : "homework","score" : 100}
