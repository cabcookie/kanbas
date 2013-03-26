#Encoding: UTF-8
module ApplicationHelper
  def getNavigation
    return [
      createNavigation("Home", "home", "home")
    ]
  end
  
  def getApplicationName
    return "Kanbas"    
  end
  
  def getCopyright
    return "© Carsten Koch, 2013"
  end
  
  private
  def createNavigation(pTitle, pLink, pIcon)
    return {title: pTitle, link: pLink, icon: pIcon}
  end
end
