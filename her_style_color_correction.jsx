
#target photoshop

try {
    if (!app.documents.length) {
        alert("Откройте документ перед выполнением сценария!");
        throw new Error("Нет открытого документа.");
    }

    var doc = app.activeDocument;
    alert("Документ открыт!");

    // Создание корректирующего слоя "Кривые"
    var idCurves = stringIDToTypeID("make");
    var descCurves = new ActionDescriptor();
    var refCurves = new ActionReference();
    refCurves.putClass(stringIDToTypeID("adjustmentLayer"));
    descCurves.putReference(stringIDToTypeID("null"), refCurves);

    var descCurvesAdjustment = new ActionDescriptor();
    descCurvesAdjustment.putString(stringIDToTypeID("name"), "Curves Adjustment");
    descCurves.putObject(stringIDToTypeID("using"), stringIDToTypeID("curvesAdjustment"), descCurvesAdjustment);

    executeAction(idCurves, descCurves, DialogModes.NO);
    alert("Корректирующий слой 'Кривые' создан!");

    // Создание корректирующего слоя "Фотофильтр"
    var idPhotoFilter = stringIDToTypeID("make");
    var descPhotoFilter = new ActionDescriptor();
    var refPhotoFilter = new ActionReference();
    refPhotoFilter.putClass(stringIDToTypeID("adjustmentLayer"));
    descPhotoFilter.putReference(stringIDToTypeID("null"), refPhotoFilter);

    var descPhotoFilterAdjustment = new ActionDescriptor();
    descPhotoFilterAdjustment.putString(stringIDToTypeID("name"), "Photo Filter Adjustment");
    descPhotoFilterAdjustment.putEnumerated(stringIDToTypeID("filter"), stringIDToTypeID("filter"), stringIDToTypeID("warmingFilter85"));
    descPhotoFilter.putObject(stringIDToTypeID("using"), stringIDToTypeID("photoFilter"), descPhotoFilterAdjustment);
    executeAction(idPhotoFilter, descPhotoFilter, DialogModes.NO);
    alert("Корректирующий слой 'Фотофильтр' создан!");

    // Создание корректирующего слоя "Цветовой баланс"
    var idColorBalance = stringIDToTypeID("make");
    var descColorBalance = new ActionDescriptor();
    var refColorBalance = new ActionReference();
    refColorBalance.putClass(stringIDToTypeID("adjustmentLayer"));
    descColorBalance.putReference(stringIDToTypeID("null"), refColorBalance);

    var descColorBalanceAdjustment = new ActionDescriptor();
    descColorBalanceAdjustment.putString(stringIDToTypeID("name"), "Color Balance Adjustment");
    descColorBalanceAdjustment.putIntegers(stringIDToTypeID("shadows"), [-15, -10, 5]);
    descColorBalanceAdjustment.putIntegers(stringIDToTypeID("midtones"), [-10, -5, 15]);
    descColorBalanceAdjustment.putIntegers(stringIDToTypeID("highlights"), [10, 0, -10]);
    descColorBalance.putObject(stringIDToTypeID("using"), stringIDToTypeID("colorBalance"), descColorBalanceAdjustment);
    executeAction(idColorBalance, descColorBalance, DialogModes.NO);
    alert("Корректирующий слой 'Цветовой баланс' создан!");

} catch (e) {
    alert("Ошибка: " + e.message + "\nLine: " + e.line);
}
